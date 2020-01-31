import React from 'react';
import RequestForm from '../../../components/Site/Forms/RequestForm';
import Footer from '../../../components/Common/Footer';
import Header from '../../../components/Site/Header'

/**
 * Specialist
 */
export default () => {

        return (
        <>
            <Header/>
            <section className="section section_fullwidth">
                <RequestForm />
            </section>
            <Footer />
        </>
        );
    }