import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cms/media')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Media Library</h2>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Upload Files</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">New Folder</button>
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="search" 
            placeholder="Search media..." 
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option>All Types</option>
            <option>Images</option>
            <option>Documents</option>
            <option>Videos</option>
            <option>Audio</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <div className="relative group cursor-pointer">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img src="https://picsum.photos/seed/crm1/400/400.jpg" alt="Product image" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">product-hero.jpg</p>
          <p className="text-xs text-gray-500">2.4 MB • Nov 15</p>
        </div>
        
        <div className="relative group cursor-pointer">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img src="https://picsum.photos/seed/crm2/400/400.jpg" alt="Team photo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">team-photo.jpg</p>
          <p className="text-xs text-gray-500">3.1 MB • Nov 14</p>
        </div>
        
        <div className="relative group cursor-pointer">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img src="https://picsum.photos/seed/crm3/400/400.jpg" alt="Office space" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">office-space.jpg</p>
          <p className="text-xs text-gray-500">1.8 MB • Nov 13</p>
        </div>
        
        <div className="relative group cursor-pointer">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img src="https://picsum.photos/seed/crm4/400/400.jpg" alt="Logo variations" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">logo-variations.png</p>
          <p className="text-xs text-gray-500">856 KB • Nov 12</p>
        </div>
        
        <div className="relative group cursor-pointer">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm">brand-guidelines.pdf</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">brand-guidelines.pdf</p>
          <p className="text-xs text-gray-500">4.2 MB • Nov 11</p>
        </div>
        
        <div className="relative group cursor-pointer">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 2a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </div>
              <p className="text-sm">intro-video.mp4</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">intro-video.mp4</p>
          <p className="text-xs text-gray-500">24.7 MB • Nov 10</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">Showing 1-6 of 1,247 media files</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">1</button>
          <button className="px-3 py-1 border rounded bg-blue-600 text-white">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  ),
})