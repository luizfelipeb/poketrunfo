import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { styled as muiStyled } from '@mui/material/styles';

export const Container = styled.div`
    width: 400px;
    height: 550px;

    .card-header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .card-name {
            font-size: 28px;
            font-weight: bold;
            text-transform: capitalize;
        }

        img {
            width: 200px;
            transform:scale(2);
        }
    }

    .attr-list {
        display: flex;
        flex-direction: column;
    }

`;

export const StyledPaper = muiStyled(Paper)(() => ({
  height: '100%',
  borderRadius: '20px',
  padding: '25px',
  background: 'linear-gradient(126deg, rgba(232,232,232,1) 0%, rgba(255,255,255,1) 35%, rgba(224,224,224,1) 100%)',
}));
