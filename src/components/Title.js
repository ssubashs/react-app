import React from 'react';

// @flow
// functional component (another type class component)
// no state for functional compoenets. 

type Props = {
    titleName: string
}


const Title = (props: Props) => {
    return (<div>{props.somthingelse}</div>);
}

export default Title;
