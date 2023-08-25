import React from "react"
import { Outlet } from "react-router-dom"
import { ComponentHeader,ComponentLat } from "../../components"
import * as S from "./styles"

export function Layout() {
  return (
    <>
     
      <ComponentHeader />
      <ComponentLat/>

      <S.Main>
        <Outlet />
      </S.Main>
    </>
  )
}
