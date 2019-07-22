import React from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { Title } from '../styles/titles';
import { GrayButton } from '../styles/buttons';
import NotFoundImage from '../images/Astronaut-big.png';

import { Image } from '../styles/mixins';

const NotFoundPage = ({ history }) => {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <GrayButton
                onClick={() => {
                    window.location.reload();
                    history.goBack();
                }}
                left
            >
                <i className="fas fa-chevron-left fa-lg" />
            </GrayButton>
            <Title>Not Found - 404</Title>
            <Image src={NotFoundImage} />
        </>
    );
};

export default withRouter(NotFoundPage);
