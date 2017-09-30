import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Footer} from '../main/app';

const imageUrl = {
  introHero: 'bus_stop.jpg',
  macApp: 'mac_app.png',
};


class Intro extends Component {
  constructor(props) {
    super(props);
  }

  getHeroBackground() {
    return {
      backgroundImage: 'url('+(imageUrl.introHero)+')',
    }
  }

  getBackgroundUrl(imageName) {
    return {
      backgroundImage: 'url('+(imageUrl[imageName])+')',
    }
  }

  render() {
    return (
      <div className="intro">
        <section className="hero" style={::this.getHeroBackground()}>
          <div className="inner-wrapper">
            <div className="content">
              <h1>HeXA Bus</h1>
              <h5>이제 좀 더 편하게 유니스트 버스 정보를 알아보세요.</h5>
              <p>회원가입, 로그인 없이 빠르게 버스정보를 알수 있습니다.</p>
              <button className="btn blue">지금 확인하기</button>
            </div>
          </div>
        </section>
        <section className="desktop-info">
          <div className="container">
            <div className="img-block">
              <img src="mac_app.png"/>
            </div>
            <div className="desc-block">
              <h1>이젠 웹이 아니라 컴퓨터에서 확인하세요.</h1>
              <p>데스크탑 어플리케이션이 나오기 전까진 웹에 접속해서 주소를 입력하거나 즐겨찾기에서 HeXA Bus를 찾아 누른다음 확인해야했습니다. 이제는 간단한 더블클릭으로 버스정보를 확인하세요. 단순히 더블클릭만이면 충분합니다.</p>
              <button className="btn">다운로드</button>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  };
}

const mapPropsToState = (state) => {
  return {
    
  }
}

export default connect()(Intro);
