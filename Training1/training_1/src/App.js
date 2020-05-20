import React from 'react';
import Slider from './components/body/Slider'
import './App.css';
import CardsList from './components/body/CardsList';
import logo from './images/580b57fcd9996e24bc43c513.png'
import Separator from './components/body/Separator';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <body className="App-body">
        <Slider />
        <CardsList title="Trải nghiệm trực tuyến nổi bật" />
        <Separator/>
        <CardsList title="Bán chạy nhất"/>
        <CardsList title="Trải nghiệm mới trong tuần này"/>
        <CardsList title="Bắt đầu trong 6 giờ tới"/>
        <CardsList title="Lý tưởng cho việc hẹn hò, do Bumble tuyển chọn"/>
        <CardsList title="Niềm vui cho gia đình"/>
        <CardsList title="Nấu ăn và cạn ly với bạn bè"/>
        <CardsList title="Học hỏi từ các vận động viên Olympic"/>
        <CardsList title="Gần gũi với động vật"/>
        <CardsList title="Lập kế hoạch cho cuối tuần này"/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
