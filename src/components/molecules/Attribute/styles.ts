import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    border-bottom: 2px solid rgba(200, 200, 200, .2);
    font-weight: bold;
    text-transform: capitalize;
    color: rgba(100, 100, 100);
    border-radius: 5px;
    z-index: 1;

    :hover {
        transition: .1s;
        background: rgba(200, 200, 200, .2);
        transform: scale(1.01);
    }

    .attr-name {
        font-size: 18px;
        align-self: center;
    }

    .attr-value {
        font-size: 22px;
    }
`;
