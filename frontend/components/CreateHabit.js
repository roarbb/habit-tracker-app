import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { HABITS_QUERY } from './HabitList';

const CREATE_HABIT_MUTATION = gql`
  mutation CREATE_HABIT_MUTATION(
    $label: String!
  ) {
    createHabit(
      label: $label
    ) {
      id
    }
  }
`;

const initialState = {
  label: "",
}

class CreateHabit extends Component {
  state = initialState;

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  resetState = () => {
    this.setState(initialState);
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_HABIT_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: HABITS_QUERY }]} >
        {(createHabit, { loading, error }) => (
          <form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await createHabit();
              // set state back to default
              this.resetState();
            }} >
            <label htmlFor="label">
              Habit:{' '}
              <input
                id="label"
                name="label"
                type="text"
                autoComplete="off"
                value={this.state.label}
                onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add" />
          </form>
        )}
      </Mutation>
    );
  }
}

export default CreateHabit;