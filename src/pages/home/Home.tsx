import { Button } from 'antd'
import { HomeStyled, SpaceStyled } from './style'

export function Home(): JSX.Element {
  return (
    <HomeStyled>
      <SpaceStyled>
        <Button type="primary">homeButton</Button>
        <Button type="default">homeButton</Button>
        <Button type="dashed">homeButton</Button>
        <Button type="link" className="underline">
          homeButton
        </Button>
      </SpaceStyled>
    </HomeStyled>
  )
}
