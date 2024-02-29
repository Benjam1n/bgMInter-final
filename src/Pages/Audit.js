import AuditBg from "../Assets/CreateToken-bg.webp";
import React  from 'react';

const Audit = () => {

    const AuditStyle = {
        backgroundImage: `url(${AuditBg})`,
    };
    return (
        <section
            className="bg-cover bg-center mx-auto h-screen text-white font-font-1"
            style={AuditStyle}
        >
            <div className="py-36">
                <h1 className="text-4xl font-bold mb-4 text-center">
                Audit partners 
                </h1>
                <p className="text-xl text-center mb-8">If you're looking for an audit service, please contact one of the following services. <br/>(All the listed partner are verified and provide genuine audit services) </p>
            </div>
        </section>
    )
}

export default Audit;