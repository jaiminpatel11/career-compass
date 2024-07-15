import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, TextField, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const ScheduleInterview = ({ primaryColor, cardColor }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [interviewDates, setInterviewDates] = useState([{ date: '', time: '' }, { date: '', time: '' }, { date: '', time: '' }]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSlotChange = (index, field, value) => {
    const newInterviewDates = interviewDates.slice();
    newInterviewDates[index][field] = value;
    setInterviewDates(newInterviewDates);
  };

  const handleSchedule = async () => {
    if (!interviewDates.some(slot => slot.date && slot.time)) {
      setSnackbarMessage('Please provide at least one valid date and time.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/jobapplications/scheduleinterview/${id}`, { interview_dates: interviewDates }, {
        headers: {
          "x-auth-token": sessionStorage.getItem("user")
        }
      });
      setSnackbarMessage('Interview Scheduled Successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setTimeout(() => navigate('/candidate_applications'), 2000); 
    } catch (error) {
      setSnackbarMessage('Error scheduling interview');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      console.error('Error scheduling interview', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="container-fluid my-2" style={{ padding: '20px' }}>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="text-center">
            <Typography variant="h4" style={{ color: primaryColor }}>Schedule Interview</Typography>
            <Card style={{ background: cardColor, padding: '2rem', borderRadius: '15px', textAlign: 'center', position: 'relative', marginTop: '10px' }}>
              {interviewDates.map((slot, index) => (
                <div key={index} style={{ marginBottom: '16px' }}>
                  <TextField
                    label={`Date Option ${index + 1}`}
                    type="date"
                    value={slot.date}
                    onChange={(e) => handleSlotChange(index, 'date', e.target.value)}
                    style={{ marginRight: '8px', width: '45%' }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    label="Time"
                    type="time"
                    value={slot.time}
                    onChange={(e) => handleSlotChange(index, 'time', e.target.value)}
                    style={{ width: '45%' }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Button variant="contained" style={{ backgroundColor: 'blue', color: 'white', width: '45%' }} onClick={handleSchedule}>
                  Confirm
                </Button>
                <Button variant="contained" style={{ backgroundColor: 'gray', color: 'white', width: '45%' }} onClick={() => navigate(-1)}>
                  Cancel
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ScheduleInterview;
