import React from 'react';
import { Icon } from '../UI';
import { storiesOf } from '@kadira/storybook';

const style = {
  width: 600,
  margin: 20,
  fontSize: 30,
};

storiesOf('Icon', module)
  .add('Default View', () => (
    <div style={style}>
      <Icon type="bold" />
      <Icon type="italic" />
      <Icon type="list" />
      <Icon type="font" />
      <Icon type="text-height" />
      <Icon type="text-width" />
      <Icon type="align-left" />
      <Icon type="align-center" />
      <Icon type="align-right" />
      <Icon type="align-justify" />
      <Icon type="indent-left" />
      <Icon type="indent-right" />
      <Icon type="list-bullet" />
      <Icon type="list-numbered" />
      <Icon type="strike" />
      <Icon type="underline" />
      <Icon type="table" />
      <Icon type="superscript" />
      <Icon type="subscript" />
      <Icon type="header" />
      <Icon type="h1" />
      <Icon type="h2" />
      <Icon type="paragraph" />
      <Icon type="link" />
      <Icon type="unlink" />
      <Icon type="quote-left" />
      <Icon type="quote-right" />
      <Icon type="code" />
      <Icon type="picture" />
      <Icon type="video" />
      <Icon type="note" />
      <Icon type="note-beamed" />
      <Icon type="music" />
      <Icon type="search" />
      <Icon type="flashlight" />
      <Icon type="mail" />
      <Icon type="heart" />
      <Icon type="heart-empty" />
      <Icon type="star" />
      <Icon type="star-empty" />
      <Icon type="user" />
      <Icon type="users" />
      <Icon type="user-add" />
      <Icon type="video" />
      <Icon type="picture" />
      <Icon type="camera" />
      <Icon type="layout" />
      <Icon type="menu" />
      <Icon type="check" />
      <Icon type="cancel" />
      <Icon type="cancel-circled" />
      <Icon type="cancel-squared" />
      <Icon type="plus" />
      <Icon type="plus-circled" />
      <Icon type="plus-squared" />
      <Icon type="minus" />
      <Icon type="minus-circled" />
      <Icon type="minus-squared" />
      <Icon type="help" />
      <Icon type="help-circled" />
      <Icon type="info" />
      <Icon type="info-circled" />
      <Icon type="back" />
      <Icon type="home" />
      <Icon type="link-alt" />
      <Icon type="attach" />
      <Icon type="lock" />
      <Icon type="lock-open" />
      <Icon type="eye" />
      <Icon type="tag" />
      <Icon type="bookmark" />
      <Icon type="bookmarks" />
      <Icon type="flag" />
      <Icon type="thumbs-up" />
      <Icon type="thumbs-down" />
      <Icon type="download" />
      <Icon type="upload" />
      <Icon type="upload-cloud" />
      <Icon type="reply" />
      <Icon type="reply-all" />
      <Icon type="forward" />
      <Icon type="quote" />
      <Icon type="code-alt" />
      <Icon type="export" />
      <Icon type="pencil" />
      <Icon type="feather" />
      <Icon type="print" />
      <Icon type="retweet" />
      <Icon type="keyboard" />
      <Icon type="comment" />
      <Icon type="chat" />
      <Icon type="bell" />
      <Icon type="attention" />
      <Icon type="alert" />
      <Icon type="vcard" />
      <Icon type="address" />
      <Icon type="location" />
      <Icon type="map" />
      <Icon type="direction" />
      <Icon type="compass" />
      <Icon type="cup" />
      <Icon type="trash" />
      <Icon type="doc" />
      <Icon type="docs" />
      <Icon type="doc-landscape" />
      <Icon type="doc-text" />
      <Icon type="doc-text-inv" />
      <Icon type="newspaper" />
      <Icon type="book-open" />
      <Icon type="book" />
      <Icon type="folder" />
      <Icon type="archive" />
      <Icon type="box" />
      <Icon type="rss" />
      <Icon type="phone" />
      <Icon type="cog" />
      <Icon type="tools" />
      <Icon type="share" />
      <Icon type="shareable" />
      <Icon type="basket" />
      <Icon type="bag" />
      <Icon type="calendar" />
      <Icon type="login" />
      <Icon type="logout" />
      <Icon type="mic" />
      <Icon type="mute" />
      <Icon type="sound" />
      <Icon type="volume" />
      <Icon type="clock" />
      <Icon type="hourglass" />
      <Icon type="lamp" />
      <Icon type="light-down" />
      <Icon type="light-up" />
      <Icon type="adjust" />
      <Icon type="block" />
      <Icon type="resize-full" />
      <Icon type="resize-small" />
      <Icon type="popup" />
      <Icon type="publish" />
      <Icon type="window" />
      <Icon type="arrow-combo" />
      <Icon type="down-circled" />
      <Icon type="left-circled" />
      <Icon type="right-circled" />
      <Icon type="up-circled" />
      <Icon type="down-open" />
      <Icon type="left-open" />
      <Icon type="right-open" />
      <Icon type="up-open" />
      <Icon type="down-open-mini" />
      <Icon type="left-open-mini" />
      <Icon type="right-open-mini" />
      <Icon type="up-open-mini" />
      <Icon type="down-open-big" />
      <Icon type="left-open-big" />
      <Icon type="right-open-big" />
      <Icon type="up-open-big" />
      <Icon type="down" />
      <Icon type="left" />
      <Icon type="right" />
      <Icon type="up" />
      <Icon type="down-dir" />
      <Icon type="left-dir" />
      <Icon type="right-dir" />
      <Icon type="up-dir" />
      <Icon type="down-bold" />
      <Icon type="left-bold" />
      <Icon type="right-bold" />
      <Icon type="up-bold" />
      <Icon type="down-thin" />
      <Icon type="left-thin" />
      <Icon type="right-thin" />
      <Icon type="up-thin" />
      <Icon type="ccw" />
      <Icon type="cw" />
      <Icon type="arrows-ccw" />
      <Icon type="level-down" />
      <Icon type="level-up" />
      <Icon type="shuffle" />
      <Icon type="loop" />
      <Icon type="switch" />
      <Icon type="play" />
      <Icon type="stop" />
      <Icon type="pause" />
      <Icon type="record" />
      <Icon type="to-end" />
      <Icon type="to-start" />
      <Icon type="fast-forward" />
      <Icon type="fast-backward" />
      <Icon type="progress-0" />
      <Icon type="progress-1" />
      <Icon type="progress-2" />
      <Icon type="progress-3" />
      <Icon type="target" />
      <Icon type="palette" />
      <Icon type="list" />
      <Icon type="list-add" />
      <Icon type="signal" />
      <Icon type="trophy" />
      <Icon type="battery" />
      <Icon type="back-in-time" />
      <Icon type="monitor" />
      <Icon type="mobile" />
      <Icon type="network" />
      <Icon type="cd" />
      <Icon type="inbox" />
      <Icon type="install" />
      <Icon type="globe" />
      <Icon type="cloud" />
      <Icon type="cloud-thunder" />
      <Icon type="flash" />
      <Icon type="moon" />
      <Icon type="flight" />
      <Icon type="paper-plane" />
      <Icon type="leaf" />
      <Icon type="lifebuoy" />
      <Icon type="mouse" />
      <Icon type="briefcase" />
      <Icon type="suitcase" />
      <Icon type="dot" />
      <Icon type="dot-2" />
      <Icon type="dot-3" />
      <Icon type="brush" />
      <Icon type="magnet" />
      <Icon type="infinity" />
      <Icon type="erase" />
      <Icon type="chart-pie" />
      <Icon type="chart-line" />
      <Icon type="chart-bar" />
      <Icon type="chart-area" />
      <Icon type="tape" />
      <Icon type="graduation-cap" />
      <Icon type="language" />
      <Icon type="ticket" />
      <Icon type="water" />
      <Icon type="droplet" />
      <Icon type="air" />
      <Icon type="credit-card" />
      <Icon type="floppy" />
      <Icon type="clipboard" />
      <Icon type="megaphone" />
      <Icon type="database" />
      <Icon type="drive" />
      <Icon type="bucket" />
      <Icon type="thermometer" />
      <Icon type="key" />
      <Icon type="flow-cascade" />
      <Icon type="flow-branch" />
      <Icon type="flow-tree" />
      <Icon type="flow-line" />
      <Icon type="flow-parallel" />
      <Icon type="rocket" />
      <Icon type="gauge" />
      <Icon type="traffic-cone" />
      <Icon type="cc" />
      <Icon type="cc-by" />
      <Icon type="cc-nc" />
      <Icon type="cc-nc-eu" />
      <Icon type="cc-nc-jp" />
      <Icon type="cc-sa" />
      <Icon type="cc-nd" />
      <Icon type="cc-pd" />
      <Icon type="cc-zero" />
      <Icon type="cc-share" />
      <Icon type="cc-remix" />
      <Icon type="github" />
      <Icon type="github-circled" />
      <Icon type="flickr" />
      <Icon type="flickr-circled" />
      <Icon type="vimeo" />
      <Icon type="vimeo-circled" />
      <Icon type="twitter" />
      <Icon type="twitter-circled" />
      <Icon type="facebook" />
      <Icon type="facebook-circled" />
      <Icon type="facebook-squared" />
      <Icon type="gplus" />
      <Icon type="gplus-circled" />
      <Icon type="pinterest" />
      <Icon type="pinterest-circled" />
      <Icon type="tumblr" />
      <Icon type="tumblr-circled" />
      <Icon type="linkedin" />
      <Icon type="linkedin-circled" />
      <Icon type="dribbble" />
      <Icon type="dribbble-circled" />
      <Icon type="stumbleupon" />
      <Icon type="stumbleupon-circled" />
      <Icon type="lastfm" />
      <Icon type="lastfm-circled" />
      <Icon type="rdio" />
      <Icon type="rdio-circled" />
      <Icon type="spotify" />
      <Icon type="spotify-circled" />
      <Icon type="qq" />
      <Icon type="instagrem" />
      <Icon type="dropbox" />
      <Icon type="evernote" />
      <Icon type="flattr" />
      <Icon type="skype" />
      <Icon type="skype-circled" />
      <Icon type="renren" />
      <Icon type="sina-weibo" />
      <Icon type="paypal" />
      <Icon type="picasa" />
      <Icon type="soundcloud" />
      <Icon type="mixi" />
      <Icon type="behance" />
      <Icon type="google-circles" />
      <Icon type="vkontakte" />
      <Icon type="smashing" />
      <Icon type="sweden" />
      <Icon type="db-shape" />
      <Icon type="logo-db" />
    </div>
  ));
