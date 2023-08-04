/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'
import React, { useState } from 'react'
import { SwipeableDrawer } from '@mui/material'

import NavIcon from '@/assets/svg/NavIcon'
import ItemsNav from '@/components/items/ItemNav'
import IteamRedes from '@/components/items/ItemRedes'

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const drawerWidth = 240

  const handleDrawerToggle =
    (_open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setMobileOpen(!mobileOpen)
    }

  return (
    <nav className="fixed top-0 z-[50] w-full bg-red-600">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <span className="self-center whitespace-nowrap font-arial text-4xl font-black tracking-[-0.1em] text-white">
          SOLAZ
        </span>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          type="button"
          onClick={handleDrawerToggle(true)}
        >
          <span className="sr-only">Open main menu</span>
          <NavIcon />
        </button>
        <SwipeableDrawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right"
          open={mobileOpen}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          onClose={handleDrawerToggle(false)}
          onOpen={handleDrawerToggle(true)}
        >
          <div className="flex h-screen flex-col justify-between">
            <div className="flex flex-col">
              <span className="self-center whitespace-nowrap border-b-2 px-5 py-8 text-center font-arial text-4xl font-black tracking-[-0.1em] text-red-500">
                SOLAZ
              </span>
              <ItemsNav mobile closeNav={setMobileOpen} />
            </div>
            <div className="flex flex-col gap-2 border-t-2 px-4 py-2 text-xs">
              <span>© 2023, SOLAZ club</span>
              <IteamRedes minimized="nav" />
            </div>
          </div>
        </SwipeableDrawer>
        <ItemsNav mobile={false} />
      </div>
    </nav>
  )
}

export default NavBar
