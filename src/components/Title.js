/* @flow */
import React from 'react';

// functional component (another type class component)
// no state for functional compoenets. 

type Props = {
    titleName: string
}

const Title = (props: Props) => {
    return (<div>{props.titleName}</div>);
}

export default Title;
