
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Menu, ActionIcon, Indicator } from '@mantine/core';
import { Bell } from 'tabler-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { successNotification } from '../../utils/helpers/notifications'
import { pushNotification } from '../../store/notifications/actions';
export const NotificationIcon = () => {
  const [opened, setOpened] = useState(false);
  const [unseenNotificationsCount, setUnseenNotificationsCount] = useState(0);
  const notifications = useSelector((state: any) => state.notificationReducer.notifications);
  const dispatch = useDispatch();


  useEffect(() => {
    const socket = io(`ws://localhost:3030`, { transports: ['websocket'] });
    // const socket = io(`wss://expense.krafters.dev`, { transports: ['websocket'] });

    // Listen for notification events

    socket.on('notification', (message: any) => {
      dispatch(pushNotification(message));
      successNotification({
        title: message?.title ?? '',
        message: message?.message ?? '',
      });
    });


    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <Menu
      shadow="md"
      width={500}
      offset={20}
      withArrow
      position="bottom-end"
      onChange={setOpened}
      closeOnItemClick={false}
    >
      <Menu.Target>
        <Indicator
          inline
          disabled={unseenNotificationsCount === 0}
          label={unseenNotificationsCount !== 0 ? unseenNotificationsCount : ''}
          size={16}
          mr={'xs'}
        >
          <ActionIcon variant={'transparent'}>
            <Bell />
          </ActionIcon>
        </Indicator>
      </Menu.Target>

      <Menu.Dropdown style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {notifications?.length > 0 ? (
          notifications.map((v: any, index: number) => (
            <div key={index}>
              <Menu.Item
              >
                {v?.message ?? ''}
              </Menu.Item>
              <Menu.Divider />
            </div>
          ))
        ) : (
          <div>
            <Menu.Item>No new notifications</Menu.Item>
          </div>
        )}
        <div
          style={{
            position: 'sticky',
            bottom: '0',
            backgroundColor: '#fff',
            textAlign: 'center',
            paddingTop: '8px', // Add padding to separate from previous item
          }}
        >
          <Menu.Item onClick={() => console.log('see more')} className="text-center">
            See More
          </Menu.Item>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};
