import React from "react";
import { Typography} from "antd";
import {CardBox, CityName, MainCard} from "./CardStyle";
import {ReactComponent as Sun} from "../../assets/Union.svg";
import {ReactComponent as Humidity} from "../../assets/Vector (1).svg";
import {ReactComponent as Deg} from "../../assets/deg.svg";

const CardWeather = ({temp, humidity, temp_max, temp_min, name}) => {
    const {Title, Text} = Typography;

    return (
        <CardBox className='site-card-wrapper position-fixed'>
            <MainCard title={
                <div className='d-flex flex-row'>
                    <Title className='mr-3'>
                        {parseInt(temp)/8} <sup><Deg /></sup>
                    </Title>
                    <Sun style={{height: '40px', width: '40px', color: 'black', fill: 'black'}}/>
                </div>
            } bordered={false}>
                <div className='d-flex flex-row'>
                    <Text className='mr-3' style={{fontSize: '20px'}} mark>Humidity</Text>
                    <Text style={{fontSize: '20px', marginRight: '5px', marginBottom: '10px', paddingBottom: '10px'}}> {humidity}%</Text>
                    <Humidity style={{width: '20px'}} />
                </div>

                <div className='d-flex flex-row mb-4'>
                    <Text className='mr-3' style={{fontSize: '20px'}} mark>Max Temperature</Text>
                    <Text style={{fontSize: '20px', marginRight: '5px'}}>
                        {parseInt(temp_max) / 8} <sup><Deg style={{width: '15px'}} /></sup>
                    </Text>
                </div>

                <div className='d-flex flex-row'>
                    <Text className='mr-3' style={{fontSize: '20px'}} mark>Min Temperature</Text>
                    <Text tyle={{fontSize: '20px'}}>
                        {parseInt(temp_min) / 8} <sup><Deg style={{width: '15px'}} /></sup>
                    </Text>
                </div>

                <CityName>{name}</CityName>
            </MainCard>
        </CardBox>
    )
};

export default CardWeather;