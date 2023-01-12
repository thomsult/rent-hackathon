import React from 'react';
import { useRouter } from 'next/router'
const carOnePage = () => {
const router = useRouter()
const {id} = router.query
console.log(id)

    return (
        <div>
        salut les loulous {id}
            
        </div>
    );
};

export default carOnePage;