import React from 'react';
import { 
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from '@heroicons/react/solid';
import { 

  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from '@heroicons/react/outline';
import SidbarRow from './SidbarRow';

import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';

const Sidbar = () => {
    const user = useSelector(selectUser);
    return (
        <div className='hidden lg:flex flex-col  bg-white'>
            <SidbarRow src={user.photo} title={user.name} />
            <SidbarRow Icon={UsersIcon} title="Friends"/>
            <SidbarRow Icon={UserGroupIcon} title="Groups"/>
            <SidbarRow Icon={ShoppingBagIcon} title="Marketplace"/>
            <SidbarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidbarRow Icon={CalendarIcon} title="Event"/>
            <SidbarRow Icon={ClockIcon} title="Memories"/>
            <SidbarRow Icon={ChevronDownIcon} title="See more"/>
            
            
        </div>
    );
};

export default Sidbar;