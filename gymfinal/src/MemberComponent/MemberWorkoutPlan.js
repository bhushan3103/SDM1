import React from 'react'
import TrainerServices from '../Services/TrainerServices';
import MembNavbar from '../NavbarComponent/MemberNavbar';

class MemberWorkoutComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            workoutplan:[]
        }
      
    }

    
    componentDidMount(){

        TrainerServices.getWorkoutPlan().then((response) => {
            this.setState({workoutplan:response.data})
        })

    }

   

    

    render(){
        return(
            <div className='container'>
                <MembNavbar />
            <div>
                <br/>
                <br/>
                <h2 style={{textAlign:'center', color:'green'}}>Workout-Plans</h2>
                <div>
                    
                    <br/>
                    <br/>
                </div>
                <table className = "table  table-striped" style={{border:'2px solid black'}}>

                    <thead>
                        <tr>
                            
                            <th>Workout Name</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            
                            
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.workoutplan.map(
                                workoutplan =>
                                <tr key = {workoutplan.workoutid}>
                                    <td>{workoutplan.workoutname}</td>
                                    <td>{workoutplan.set1}</td>
                                    <td>{workoutplan.set2}</td>
                                    <td>{workoutplan.set3}</td>
                                   
                                   
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default MemberWorkoutComponents