import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { AppIcons } from '@/utils/AppIcons';
import Icon from '../Icon';

interface Props {
    totalePage: number;
    onPageChange: (pageNum: number) => void;
}
const Pagination: React.FC<Props> = ({ onPageChange, totalePage }) => {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index: number) =>
        ({
            variant: active === index ? 'filled' : 'text',
            color: active === index ? 'blue' : 'blue-gray',
            onClick: () => {
                setActive(index);
                onPageChange(index);
            }
        } as any);

    const next = () => {
        if (active === totalePage) return;
        onPageChange(active + 1);
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        onPageChange(active - 1);
        setActive(active - 1);
    };
    return (
        <div className="flex items-center gap-4">
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2"
                onClick={prev}
                disabled={active === 1}
            >
                <Icon name={AppIcons.arrowLeft} /> Previous
            </Button>
            <div className="flex items-center gap-2">
                {[...Array.of(totalePage).keys()].map((item) => (
                    <IconButton key={item} {...getItemProps(item + 1)}>
                        {item + 1}
                    </IconButton>
                ))}
            </div>
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === totalePage}
            >
                Next
                <Icon name={AppIcons.arrowRight} />
            </Button>
        </div>
    );
};
export default Pagination;
