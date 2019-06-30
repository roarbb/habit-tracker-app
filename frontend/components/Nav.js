import Link from 'next/link';
import User from './User';
import Signout from './Signout';
import { Menu, Button } from 'antd';

const Nav = () => (

  <User>
    {({ data: { me } }) => (
      <>
        {me && (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link href="/habits">Habits</Link></Menu.Item>
            <Signout />
          </Menu>
        )}
        {!me && (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Link href="/signup"><Button type="primary">Sign In</Button></Link>
          </Menu>
        )}
      </>
    )}
  </User>

);

export default Nav;
