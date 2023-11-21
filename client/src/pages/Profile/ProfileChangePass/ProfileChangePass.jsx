import React from 'react';
import ProfileSideBar from '../../../components/ProfileSideBar/ProfileSideBar';
import ProfileSideBarMobile from '../../../components/ProfileSideBar/ProfileSideBarMobile';

const ProfileChangePass = () => {
    return (
        <div id='profile' className="container-profile">
            <div className='shofy-app'>
                <div className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="side-bar col-4 d-none d-lg-block d-xl-block">
                                <ProfileSideBar/>
                            </div>
                            <div className='side-bar-mobile d-lg-none d-xl-none'>
                                <ProfileSideBarMobile/>
                            </div>
                            <div className="col-12 col-lg-8 col-xl-8 content-profile">
                                Profile ChangePassword
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileChangePass;