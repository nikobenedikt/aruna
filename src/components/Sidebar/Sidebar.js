import { React, useState } from 'react'
import SidebarButton from './SidebarButton/SidebarButton'
import { RiHomeWifiLine } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { VscCircuitBoard } from 'react-icons/vsc'
import { RiListSettingsFill } from 'react-icons/ri'
import { IoMdHelpCircleOutline } from 'react-icons/io'

import style from './Sidebar.module.scss'

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(true)

  let lis = [
    { text: 'Home', icon: RiHomeWifiLine },
    { text: 'Editor', icon: FaRegEdit },
    { text: 'My Circuits', icon: VscCircuitBoard },
    { text: 'Settings', icon: RiListSettingsFill },
    { text: 'Help', icon: IoMdHelpCircleOutline },
  ]

  let clickHandler = () => {
    setIsClosed(!isClosed)
    console.log('clicked')
  }

  return (
    <div className={`${style.sidebar_wrapper} ${isClosed ? style.closed : ''}`}>
      <div className={style.sidebar}>
        <p className={style.sidebar__logo} onClick={() => clickHandler()}>
          Aruna
        </p>
        {lis.map((li, index) => (
          <SidebarButton key={index} li={li} click={() => clickHandler()} />
        ))}
      </div>
    </div>
  )
}
export default Sidebar
