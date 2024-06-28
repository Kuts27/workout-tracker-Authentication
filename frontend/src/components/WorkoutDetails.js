const WorkoutDetails = ({ workout }) => {

  const handleDelete = async () => {
    // Construct the endpoint with the workout ID
    const endpoint = `/api/workouts/${workout._id}` ;
    
    // Send DELETE request to the server
    const response = await fetch(endpoint, {
      method: 'DELETE',
    });

    // Parse the response from the server
    const json = await response.json();

    if (response.ok) {
      console.log('Workout deleted:', json);
    } else {
      console.error('Failed to delete workout:', json.error);
    }
  };

    return (
  
        <div className="workout-details">
          <div className="workout-container">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
          </div>
          
          <div className="button1">
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>      
    )
  }
  
  export default WorkoutDetails