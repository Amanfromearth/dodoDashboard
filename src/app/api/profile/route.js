import { NextResponse } from 'next/server';

let mockProfileData = {
  firstName: 'Anurag',
  lastName: 'Bevinal',
  contactPhone: '+91 1234567890',
  title: 'Last Item Tag',
  company: 'Dodo',
  email: 'dodo@dodo.com',
  country: 'India',
  language: 'English',
  status: true
};

export async function GET() {
  return NextResponse.json(mockProfileData);
}

export async function POST(request) {
  console.log("POST Hit") 
  try {
    const updates = await request.json();
    mockProfileData = { ...mockProfileData, ...updates };
    return NextResponse.json({ message: 'Profile updated successfully', data: mockProfileData });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating profile', error: error.message }, { status: 500 });
  }
}
