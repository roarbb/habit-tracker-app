import Link from 'next/link';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <div>
        {me && (
          <>
            <Link href="/habits">
              <a>Habits</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </div>
    )}
  </User>
);

export default Nav;
