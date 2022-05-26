import { Badge } from '@mui/material';
import {ShoppingCartOutlined} from '@mui/icons-material/';
import { red } from '@mui/material/colors';


const CartWidget = () => {
    return(
        <Badge badgeContent={10} sx={{color: red[600]}}>
        <ShoppingCartOutlined>
        </ShoppingCartOutlined>
        </Badge>
    )
}

export default CartWidget;