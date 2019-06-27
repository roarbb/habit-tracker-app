import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Error from './ErrorMessage';
import CreateHabit from "./CreateHabit";

const HABITS_QUERY = gql`
  query HABITS_QUERY {
    habits {
      id
      label
    }
  }
`;

class HabitList extends Component {
  render() {
    return (
      <Query query={HABITS_QUERY}>
        {({ data, loading, error }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>loading...</p>;

          return (
            <div>
              <CreateHabit />
              <hr />
              <h2>You have {data.habits.length} habits</h2>
              {data.habits.map(habit => (
                <div key={habit.id}>{habit.label}</div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default HabitList;
export { HABITS_QUERY };