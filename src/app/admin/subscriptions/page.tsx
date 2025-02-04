export default function SubscribersList() {
  const subscribers = [
    { id: 1, email: "john.doe@example.com", feedback: "Great platform!" },
    { id: 2, email: "jane.smith@example.com", feedback: "Love the simplicity." },
    { id: 3, email: "alex.johnson@example.com", feedback: "Needs more features!" },
    { id: 4, email: "emily.brown@example.com", feedback: "Amazing experience." },
    { id: 5, email: "john.doe@example.com", feedback: "Great platform!" },
    { id: 6, email: "jane.smith@example.com", feedback: "Love the simplicity." },
    { id: 7, email: "alex.johnson@example.com", feedback: "Needs more features!" },
    { id: 8, email: "emily.brown@example.com", feedback: "Amazing experience." },    { id: 1, email: "john.doe@example.com", feedback: "Great platform!" },
    { id: 9, email: "jane.smith@example.com", feedback: "Love the simplicity." },
    { id: 10, email: "alex.johnson@example.com", feedback: "Needs more features!" },
    { id: 11, email: "emily.brown@example.com", feedback: "Amazing experience." },
    { id: 17, email: "john.doe@example.com", feedback: "Great platform!" },
    { id: 12, email: "jane.smith@example.com", feedback: "Love the simplicity." },
    { id: 15, email: "alex.johnson@example.com", feedback: "Needs more features!" },
    { id: 16, email: "emily.brown@example.com", feedback: "Amazing experience." },
  ];

  return (
    <div className="min-h-screen w-100% bg-white mb-10 text-black flex overflow-y-hidden justify-center p-6">
      <div className="w-full max-w-4xl overflow-y-scroll max-h-screen bg-gray-100 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Subscribers List</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-100">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left border-b border-gray-100">Email</th>
                <th className="p-3 text-left border-b border-gray-100">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber, index) => (
                <tr key={subscriber.id} className="hover:bg-gray-50 transition">
                  <td className="p-3 border-b border-gray-100">{subscriber.email}</td>
                  <td className="p-3 border-b border-gray-100">{subscriber.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
