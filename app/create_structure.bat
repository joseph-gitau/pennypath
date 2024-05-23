@echo off

mkdir components
mkdir components\layout
type nul > components\layout\Header.js
type nul > components\layout\Footer.js
type nul > components\layout\Sidebar.js

mkdir components\charts
type nul > components\charts\ExpenseChart.js
type nul > components\charts\IncomeChart.js

mkdir components\transactions
type nul > components\transactions\TransactionForm.js
type nul > components\transactions\TransactionList.js

mkdir components\categories
type nul > components\categories\CategoryForm.js
type nul > components\categories\CategoryList.js

mkdir components\common
type nul > components\common\Button.js
type nul > components\common\Modal.js
type nul > components\common\Notification.js

echo Folder structure and files created successfully.
