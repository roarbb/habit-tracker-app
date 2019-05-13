import React, { Component } from 'react';
import Error from './ErrorMessage';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
        {({ data: { habits }, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <Error erorr={error} />;

          return (
            <div>
              <h2>You have {habits.length} habits</h2>
              {habits.map(habit => (
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