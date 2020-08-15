import React, {useState} from "react";
import {connect} from 'react-redux';
import {deleteItem, getData} from "../../redux/weather/weatherAction";
import {Button, Layout, List, Typography} from "antd";
import {DeleteFilled} from "@ant-design/icons";
import {WindMillLoading} from 'react-loadingg';
import SearchInput from "../../components/SearchInput/SearchInput";
import CardWeather from "../../components/Card/Card";

const Main = ({fetching, errorFetch, data, cityWeather, getData, deleteItem}) => {
    const [city, setCity] = useState('');
    const {Header, Content, Sider} = Layout;
    const {Title, Text} = Typography;

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        getData(city);
        setCity('');
    };

    const handleDelete = (id) => {
        deleteItem(id)
    };

    const handleChange = e => {
        setCity(e.target.value)
    };

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sider onScroll collapsible>
                <Title mark level={4} className="text-center mt-4">
                    Weather App
                </Title>

                <List
                    theme="dark"
                    dataSource={data}
                    style={{marginTop: '20px', padding: '0 10px'}}
                    renderItem={(item) => {
                        return(
                            <List.Item>
                                <div className='d-flex flex-row'>
                                    <Text style={{color: 'white', width: '80%'}} mark>
                                        {item.name}
                                    </Text>
                                    <div className='ml-2 text-white'>
                                        {parseInt(item.main.temp)/8}
                                    </div>
                                </div>
                                <Button
                                    type='primary'
                                    style={{padding: 0, width: '20%'}}
                                    danger
                                    icon={<DeleteFilled
                                        style={{fontSize: '20px'}}
                                        onClick={() => handleDelete(item.id)}
                                    />}
                                />
                            </List.Item>
                        )
                    }}
                >
                </List>
                {fetching && (<WindMillLoading/>)}
            </Sider>
            <Layout className="site-layout position-relative">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <SearchInput
                        handleSubmit={handleSubmitSearch}
                        handleChange={handleChange}
                        city={city}
                    />
                    {(errorFetch || cityWeather.main) && <Text style={{color: 'red'}}>Enter a valid City Name</Text>}
                </Header>
                <Content className='main-content position-relative'>
                    <div
                        className="site-layout-background position-relative"
                        style={{padding: 24, minHeight: 360}}
                    >
                        {cityWeather.main ? (
                            <CardWeather
                                humidity={cityWeather.main.humidity}
                                temp={cityWeather.main.temp}
                                temp_max={cityWeather.main.temp_max}
                                temp_min={cityWeather.main.temp_min}
                                name={cityWeather.name}
                            />
                        ) : (
                            <Text style={{color: 'red'}}>Enter a valid City Name</Text>
                        )}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

const mapState = state => {
    return {
        fetching: state.weather.fetching,
        data: state.weather.data,
        cityWeather: state.weather.cityWeather,
        errorFetch: state.weather.errorFetch
    }
};

export default connect(mapState, {getData, deleteItem})(Main);
