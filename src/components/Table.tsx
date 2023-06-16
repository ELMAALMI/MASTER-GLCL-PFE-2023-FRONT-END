import React from 'react';

const Table: React.FC<Props> = ({ content, head }) => {
    const tableContainerRef = React.useRef<HTMLDivElement>(null);
    return (
        <div className="flex w-full" ref={tableContainerRef}>
            <table className="w-full text-sm text-left text-gray-500 rounded-sm p-5">
                <thead className="text-xs px-3 bg-slate-300 text-white">{head}</thead>
                <tbody>{React.Children.toArray(content)}</tbody>
            </table>
        </div>
    );
};
export default Table;
interface Props {
    head: JSX.Element;
    content: JSX.Element[];
}
