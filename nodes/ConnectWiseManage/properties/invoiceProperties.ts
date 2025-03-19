import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const invoiceProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an invoice',
				action: 'Create an invoice',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an invoice',
				action: 'Delete an invoice',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an invoice by ID',
				action: 'Get an invoice',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many invoices',
				action: 'Get many invoices',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search invoices',
				action: 'Search invoices',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an invoice',
				action: 'Update an invoice',
			},
		],
		default: 'create',
	},
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['get', 'update', 'delete'],
			},
		},
		description: 'The ID of the invoice',
	},
	{
		displayName: 'Company ID',
		name: 'company',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		description: 'The company ID associated with this invoice',
	},
	{
		displayName: 'Search Query',
		name: 'searchQuery',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['search'],
			},
		},
		description: 'Search query to filter invoices',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean' as NodePropertyTypes,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number' as NodePropertyTypes,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		type: 'string' as NodePropertyTypes,
		default: 'id',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['getAll', 'search'],
			},
		},
		description: 'Order results by specified field',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection' as NodePropertyTypes,
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create', 'update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Date',
				name: 'date',
				type: 'string' as NodePropertyTypes,
				default: '',
				description: 'Invoice date (YYYY-MM-DD)',
			},
			{
				displayName: 'Due Date',
				name: 'dueDate',
				type: 'string' as NodePropertyTypes,
				default: '',
				description: 'Invoice due date (YYYY-MM-DD)',
			},
			{
				displayName: 'Reference',
				name: 'reference',
				type: 'string' as NodePropertyTypes,
				default: '',
				description: 'Invoice reference number',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options' as NodePropertyTypes,
				options: [
					{
						name: 'Open',
						value: 'Open',
					},
					{
						name: 'Paid',
						value: 'Paid',
					},
					{
						name: 'Void',
						value: 'Void',
					},
				],
				default: 'Open',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options' as NodePropertyTypes,
				options: [
					{
						name: 'Standard',
						value: 'Standard',
					},
					{
						name: 'Progress',
						value: 'Progress',
					},
					{
						name: 'Credit',
						value: 'Credit',
					},
				],
				default: 'Standard',
			},
		],
	},
];
