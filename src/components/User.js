import React from 'react';
const List = (props) => {
  const { users } = props;
  if (!users || users.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id} className='list'>
            <div className="image-wrapper">
              <button>+</button>
              <img src={user.picture.large} class="img" alt={user.name.first} />
            </div>
            <div className="info-wrapper">
              <h2 className='user-name'>{user.name.first} {user.name.last} </h2>
              <p className='user-location'>{user.location.city}, {user.location.country}, {user.location.state}</p>
              <p className='user-email'>{user.email} </p>
              <p className='user-phone'>{user.phone} </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
