import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupWork from "@material-ui/icons/GroupWork";
import Airplay from "@material-ui/icons/Airplay";
import LocationOn from "@material-ui/icons/LocationOn";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LockIcon from '@material-ui/icons/Lock';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import iphone from "assets/img/sections/iphone.png";
import iphone2 from "assets/img/sections/iphone2.png";
import bg9 from "assets/img/bg9.jpg";
import cardsTest from "assets/img/iphone-pokerbros-game.png";
import macbookImage from "assets/img/lethalpoker-lobby.png";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        {/*<div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Play poker 24/7 from anywhere</h2>
              <h5 className={classes.description}>
                
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="Fast Payouts"
                description="No more waiting for days after withdrawal. Get paid in Crypto or Fiat."
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={VerifiedUser}
                title="Instant Deposit"
                description="Buy chips instantly, we can get you playing your favourite games in no time"
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Trusted"
                description="Your funds are 100% safe and you can withdraw anytime"
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          </div>*/}
        {/* Feature 1 END */}
        {/* Feature 2 START */}
        {/*<div className={classes.features2}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Why our product is the best</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={GroupWork}
                title="Collaborate"
                description={
                  <span>
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={Airplay}
                title="Airplay"
                description={
                  <span>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={LocationOn}
                title="Location Integrated"
                description={
                  <span>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
              </div>*/}
        {/* Feature 2 END */}
        {/* Feature 3 START */}
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer}>
                <img src={macbookImage} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>Daily freerolls</h2>
              <InfoArea
                className={classes.infoArea}
            icon={CheckCircleIcon}
                title="Win cash prizes with no deposit"
                description="We offer Freeroll games daily for club members. Take your shot at winning cash prizes with no deposit or funds required."
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={CheckCircleIcon}
                title="No Limit Texas Holdem"
                description="We Have 24/7 Cash Games & Nightly MTTs"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={CheckCircleIcon}
                title="Pot Limit Omaha"
                description="Tables start at 0.1/0.2"
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 3 END */}
        {/* Feature 4 START */}
        <div className={classes.features4}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Start playing instantly</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
              <InfoArea
                icon={GroupAddIcon}
                title="Join thousands of players"
                description=" Our club has players from across the world"
                iconColor="info"
              />
              <InfoArea
                icon={QueryBuilderIcon}
                title="24/7 tournaments and cash tables"
                description="There are  daily NLH and PLO Tournaments, with generous guaranteed prize pools"
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={4}>
              <div className={classes.phoneContainer}>
                <img src={cardsTest} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
              <InfoArea
                icon={LockIcon}
                title="Private online games"
                description="Get access to thousands of active players and hundreds of tables running nonstop"
                iconColor="primary"
              />
              <InfoArea
                icon={TrendingDownIcon}
                title="Low Competition"
                description="The PokerBros App is designed and catered for amateurs"
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 4 END */}
      </div>
      {/* Feature 5 START */}
     {/*  <div
        className={classes.features5}
        style={{ backgroundImage: `url(${bg9})` }}
      >
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>Your life will be much easier</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Code}
                  title="For Developers"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={FormatPaint}
                  title="For Designers"
                  description={
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Dashboard}
                  title="Material-UI Grid"
                  description={
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Example Pages Included"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="Save Time"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Save Money"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
                </div> */}
      {/* Feature 5 END */}
    </div>
  );
}
