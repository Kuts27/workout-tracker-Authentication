import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts',{
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }

    if(user) {
      fetchWorkouts()
    }
    
  }, [workouts, user])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home