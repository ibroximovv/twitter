import React from 'react'

const Profile = ({ img, name, username, asset }) => {
    return (
        <div className='flex items-center justify-between pt-[260px] pb-[200px]'>
            <div className='flex gap-[10px] items-center'>
                <img src={img} alt="" />
                <div className=''>
                    <strong className='font-semibold text-[16px] text-[#000000]'>{name}</strong>
                    <p className='font-noraml text-[16px] text-[#536471]'>{username}</p>
                </div>
            </div>
            <div>{asset}</div>
        </div>
    )
}

export default Profile