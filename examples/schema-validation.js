// Example of using the new schema-based validation API
const { Schema } = require('../index');

// Define a user schema
const UserSchema = Schema.object({
  username: Schema.string().min(3).max(20),
  email: Schema.string().email(),
  age: Schema.number().min(18).optional(),
  isActive: Schema.boolean(),
  tags: Schema.array(Schema.string()).min(1)
});

// Valid user data
const validUser = {
  username: 'john_doe',
  email: 'john@example.com',
  age: 25,
  isActive: true,
  tags: ['user', 'premium']
};

// Invalid user data
const invalidUser = {
  username: 'jo', // too short
  email: 'not-an-email',
  age: 16, // too young
  isActive: 'yes', // not a boolean
  tags: [] // empty array
};

// Validate valid user
console.log('\nValidating valid user:');
const validResult = UserSchema.parse(validUser);
if (validResult.success) {
  console.log('✅ Valid data:', validResult.data);
} else {
  console.log('❌ Validation errors:', validResult.errors);
}

// Validate invalid user
console.log('\nValidating invalid user:');
const invalidResult = UserSchema.parse(invalidUser);
if (invalidResult.success) {
  console.log('✅ Valid data:', invalidResult.data);
} else {
  console.log('❌ Validation errors:', invalidResult.errors);
}

// Example of using string schema
console.log('\nString validation examples:');
const EmailSchema = Schema.string().email();
console.log('Email validation:', EmailSchema.parse('test@example.com'));
console.log('Invalid email:', EmailSchema.parse('not-an-email'));

// Example of using number schema
console.log('\nNumber validation examples:');
const AgeSchema = Schema.number().min(18).max(100);
console.log('Valid age:', AgeSchema.parse(25));
console.log('Invalid age:', AgeSchema.parse(10));

// Example of using boolean schema
console.log('\nBoolean validation examples:');
const ActiveSchema = Schema.boolean().true();
console.log('Valid boolean:', ActiveSchema.parse(true));
console.log('Invalid boolean:', ActiveSchema.parse(false));

// Example of using array schema
console.log('\nArray validation examples:');
const TagsSchema = Schema.array(Schema.string()).min(1).unique();
console.log('Valid array:', TagsSchema.parse(['user', 'admin']));
console.log('Invalid array:', TagsSchema.parse([]));

// Example of using optional fields
console.log('\nOptional field examples:');
const ProfileSchema = Schema.object({
  name: Schema.string(),
  bio: Schema.string().optional()
});
console.log('With optional field:', ProfileSchema.parse({ name: 'John' }));
console.log('With optional field provided:', ProfileSchema.parse({ name: 'John', bio: 'Developer' }));

// Example of custom validation
console.log('\nCustom validation example:');
const UsernameSchema = Schema.string().custom(
  value => !value.includes('admin'),
  'Username cannot contain "admin"'
);
console.log('Valid username:', UsernameSchema.parse('john_doe'));
console.log('Invalid username:', UsernameSchema.parse('admin_user'));