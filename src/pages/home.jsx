// página del home, se importarán los componentes internos
import React from 'react';
import Componente from '../components/component';

const Page = () => {
    return (
        <>
        <div className="page">
            <Componente />
        </div>
        <style jsx="true">
            {`
            .page {
                display: flex;
                justifyContent: center;
            }
            `}
        </style>
        </>
    )
}
export default Page;
