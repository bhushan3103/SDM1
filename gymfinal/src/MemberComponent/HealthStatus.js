import React, { Component } from 'react';


class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      bmi: null,
    };
  }

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };

  calculateBMI = () => {
    const { weight, height } = this.state;
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    return bmi;
  };


  getBMIResults(bmi) {
    let bmiResults = {
      label: '',
      alertClass: '',
    };

    if (bmi <= 18.5) {
      bmiResults.label = 'Underweight';
      bmiResults.alertClass = 'alert-danger';
    }
    else if (bmi <= 24.9) {
      bmiResults.label = 'Normal weight';
      bmiResults.alertClass = 'alert-success';
    }
    else if (bmi <= 29.9) {
      bmiResults.label = 'Overweight';
      bmiResults.alertClass = 'alert-warning';
    }
    else if (bmi >= 30) {
      bmiResults.label = 'Obesity';
      bmiResults.alertClass = 'alert-danger';
    } else {
      bmiResults.label = 'BMI';
      bmiResults.alertClass = 'alert-primary';
    }

    return bmiResults;
  }


  render() {
    let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);
    return (
      <div>
        <h1>BMI Calculator</h1>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={this.state.weight}
            onChange={this.handleWeightChange}
          />
        </div>
        <br />
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            value={this.state.height}
            onChange={this.handleHeightChange}
          />
        </div><br />
        <button onClick={this.calculateBMI}>Calculate BMI</button>
        {(
          <div>
            <BmiDisplay bmi={bmi} label={results.label} alertClass={results.alertClass} />
          </div>

        )}
      </div>
    );
  }
}

function BmiDisplay(props) {
  return (
    <div className={"bmi-result alert " + props.alertClass}>
      <div>{props.bmi || '--.-'}</div>
      <div>{props.label}</div>
    </div>
  )
}
export default BMICalculator