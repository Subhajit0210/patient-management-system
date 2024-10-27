"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"

// This would typically come from an API or database
const patients = [
  { id: "P001", name: "John Doe", age: 45, gender: "Male", condition: "Hypertension" },
  { id: "P002", name: "Jane Smith", age: 32, gender: "Female", condition: "Diabetes" },
  { id: "P003", name: "Bob Johnson", age: 58, gender: "Male", condition: "Arthritis" },
  { id: "P004", name: "Alice Brown", age: 27, gender: "Female", condition: "Asthma" },
  { id: "P004", name: "Subhajit Sikder", age: 23, gender: "Male", condition: "Single" },
  { id: "P005", name: "Charlie Davis", age: 63, gender: "Male", condition: "Coronary Artery Disease" },
  { id: "P005", name: "Ayantika baby", age: 13, gender: "Female", condition: "Too cute too handle" },

]

export default function PatientSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="container mx-auto py-4 px-10">
        <div className="bg-gradient-to-r from-blue-200 to-purple-500 shadow-md rounded-lg p-6">
        <img src="path/to/your/image.jpg" alt="Description of image" className="w-full h-auto mb-6 rounded-lg" />

            <h1 className="text-2xl font-bold mb-6 text-black text-center">Patient Search</h1>
            <div className="flex items-center justify-center mb-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-black" />
              <Input
              type="search"
              placeholder="Search patients by name or ID"
              className="pl-8 w-full text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search patients"
              />
            </div>
            <button className="ml-4 bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 text-sm">
              Search
            </button>
            </div>
          <div className="rounded-md border overflow-hidden">
            <Table className="min-w-full divide-y divide-gray-200">
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">ID</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Name</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Age</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Gender</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Condition</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white divide-y divide-gray-200">
                {searchTerm ? (
                  filteredPatients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-black">{patient.id}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-black">{patient.name}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-black">{patient.age}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-black">{patient.gender}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-black">{patient.condition}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="px-6 py-4 text-center text-black">
                      Enter a search term to view patient details
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          {searchTerm && filteredPatients.length === 0 && (
            <p className="text-center text-black mt-4">No patients found matching your search.</p>
          )}
          {loading && (
            <div className="flex justify-center mt-4">
              <div className="loader"></div>
            </div>
          )}
          <div className="flex justify-between items-center mt-4">
            <button className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400">
              Previous
            </button>
            <button className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400">
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}