import Avatar from 'boring-avatars';
import { Calendar } from "lucide-react";
import { formatDate, getStatusColor } from '../utils/transactionUtils';

const TableBody = ({ currentItems }) => (
  <tbody className="text-sm">
    {currentItems.map((transaction) => (
      <tr key={transaction.id} className="border-b dark:border-[#3f3f3f]">
        <td className="p-2 hidden sm:table-cell">{transaction.id}</td>
        <td className="p-2">
          <div className="flex gap-2 items-center">
            <Avatar
              name={transaction.user}
              colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]}
              size={23}
              variant="beam"
            />
            <span className="text-xs lg:text-sm">{transaction.user}</span>
          </div>
        </td>
        <td className="p-2 hidden sm:table-cell">{transaction.project}</td>
        <td className="p-2">₹{transaction.amount.toFixed(2)}</td>
        <td className="p-2">
          <div className="flex gap-1 items-center">
            <Calendar className="w-4 h-4"/>
            <span>{formatDate(transaction.date)}</span>
          </div>
        </td>
        <td className="p-2">
          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(transaction.status)}`}>
            {transaction.status}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;