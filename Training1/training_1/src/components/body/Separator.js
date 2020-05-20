import React from 'react';
import '../../styles/separator.css'
import BannerItem from './BannerItem';
import Grandma from '../../images/55ede8e9-21cc-4302-918a-1343f70e04f0.jpg';
import Laptop from '../../images/2590b11f-d89f-4d19-8395-09b04e1582ef.jpg';
import Activity from '../../images/6ca44422-9ab4-42d0-94a1-73fff922164e.jpg'
import { BANNER_CONTENT } from '../../utils/config';

export default class Separator extends React.Component {
    render() {
        return (
            <div className="separator-container">
                <div className="banner-title">
                    <span className="title">Hãy cùng nhau thử điều gì đó mới mẻ</span>
                </div>
                <div className="bannder-item-container">
                    <BannerItem 
                        imageSource={Grandma} 
                        bannerTitle="Người tổ chức chu đáo"
                        bannerContent={BANNER_CONTENT.BANNER_OWNER}
                    />
                    <BannerItem 
                        imageSource={Laptop} 
                        bannerTitle="Hoạt động theo nhóm nhỏ"
                        bannerContent={BANNER_CONTENT.ACTIVITY}
                    />
                    <BannerItem 
                        imageSource={Activity} 
                        bannerTitle="Đơn giản và trong phạm vi toàn cầu"
                        bannerContent={BANNER_CONTENT.RANGE}
                    />
                </div>
            </div>
        );
    }
}