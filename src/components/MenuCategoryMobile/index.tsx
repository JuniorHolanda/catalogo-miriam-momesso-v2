'use client'
import { motion, AnimatePresence } from "framer-motion";
import { SlMenu } from "react-icons/sl"
import { SContainerBtnHiddenMenu, SContainerMenu, SContent, SWrapper } from "./menuCategoryMobile"
import { useState } from "react"
import DropDawnMenu from "../DropDawnMenu"

export default function MenuCategoryMobile() {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  // const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <SWrapper onClick={() => setShowMenu(!showMenu)}>
      <AnimatePresence>
        {showMenu && (
          <SContainerMenu
            initial={{ opacity: .5, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <SContent>
              <DropDawnMenu />
            </SContent>

          </SContainerMenu>
        )}
      </AnimatePresence>
      <SlMenu className="iconShowMenu" />
    </SWrapper>
  )
}