import React, { lazy, Suspense, useEffect, useState } from 'react'
import APICall from '../APICall'
import { Helmet } from 'react-helmet'
const ProfileInfo = lazy(() => import('./ProfileInfo'))
const ContentSection = lazy(() => import('./ContentSection'))


const Account = () => {

    const [userData, setUserData] = useState(null);


    const getUserData = async () => {
        const data = await APICall(`/api/profile/${localStorage.username}`, 'GET');
        if (data.status) {
            setUserData(data.user)
        }
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <>
            <Helmet>
                <title>RentFlix - {localStorage.username}</title>
            </Helmet>
            <div className='row'>
                <Suspense fallback={<>Loading...</>}>
                    <ProfileInfo userData={userData?.user} />
                    <ContentSection getUserData={getUserData} posts={userData?.posts} user_data={userData?.user} />
                </Suspense>
            </div>
        </>
    )
}

export default Account
