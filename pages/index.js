import React from 'react'
import Card, { CardContainer } from '../components/card'
import UpdateSection from '../components/update-section'
import Panel, { PanelButton } from '../components/panel'
import { prefixLink } from 'gatsby-helpers'
import Waypoint from 'react-waypoint'

const updates = [
  <span>Save the date!</span>,
]

export default class Home extends React.Component {
  static propTypes = {
    onToggleMenu: React.PropTypes.func,
  }

  state = {
    panelVisible: false,
  }

  panelWaypoint = ({ currentPosition }) => {
    const { panelVisible } = this.state
    const beyondHero = currentPosition !== Waypoint.below
    if (this.props.onToggleMenu) {
      this.props.onToggleMenu(beyondHero)
    }
    this.setState({ panelVisible: panelVisible || beyondHero })
  }

  render () {
    return (
      <div>
        <div className="row align-center large-unstack">
          <div className="column large-4 large-order-1 large-text-right">
            <hr className="u-separator" />
            <h2 className="u-title">JSConf Iceland</h2>
            <h2 className="u-subtitle">March 1<sup>st</sup> — 2<sup>nd</sup> 2018</h2>
            <UpdateSection updates={updates} />
          </div>
          <div className="large-6 column">
            <h3 className="u-shoutout">Feel free to explore</h3>
            <CardContainer>
              <Card icon="logo-clipped" link={prefixLink('/about/')} title="About" />
              <Card icon="schedule" link={prefixLink('/schedule/')} title="Schedule" />
              <Card onlyLarge blank />

              <Card onlyLarge blank />
              <Card icon="ticket" link={prefixLink('/tickets/')} title="Tickets" />
              <Card icon="tonkvisl" link={prefixLink('/venue/')} title="Venue" />

              <Card icon="call" link={prefixLink('/cfp/')} title="Call For Proposal" />
              <Card onlyLarge />
              <Card onlyLarge blank />

              <Card onlyLarge />
              <Card blank onlyLarge />
              <Card blank onlyLarge />

              <Card onlyLarge pushLeft />
              <Card onlyLarge />
            </CardContainer>
          </div>
        </div>
        <div className="row align-center">
          <div className="large-10 column u-offsetParent">
            <Panel hidden={!this.state.panelVisible}>
              <Waypoint onPositionChange={this.panelWaypoint} bottomOffset="25%" />
              <p>JSConf will be held in Iceland March 1st — 2nd.</p>
              <p>That's a Thursday and Friday. Perfect for catching up on awesome talks and with friends from the JavaScript community.</p>
              <p>Expect two awesome tracks over two days with over 30 talks in total</p>
              <PanelButton href={prefixLink('/about/')}>Learn More</PanelButton>
            </Panel>
          </div>
        </div>
        <div className="row align-right show-for-large">
          <div className="large-6 column">
            <Card blank />
            <Card />
            <Card />

            <Card blank />
            <Card />
          </div>
        </div>
      </div>
    )
  }
}
