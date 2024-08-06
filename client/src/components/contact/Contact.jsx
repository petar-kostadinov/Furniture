export default function Contact() {
    return (
        <section className="contact_section layout_padding">
            <div>
                <div className="container ">
                    <div className="heading_container">
                        <h2 className="">Contact Us</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone" />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="message-box"
                                        placeholder="Message"
                                    />
                                </div>
                                <div className="d-flex ">
                                    <button>SEND</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.6849209749077!2d26.48195483780865!3d42.52466312144889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6315e9c2f5b2d%3A0xa86ca6387eda1f36!2z0JrQvtC90L3QsCDQsdCw0LfQsCDQmtCw0LHQuNC70LU!5e0!3m2!1sen!2str!4v1721654391067!5m2!1sen!2str"
                                        width={600}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}