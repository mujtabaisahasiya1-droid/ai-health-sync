import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I am MediLink AI. How can I help you with your health concerns today? Remember, I am an AI assistant and not a medical professional.", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessages: Message[] = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");
    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thank you for sharing. Can you tell me more about the symptoms?", isUser: false}]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-128px)]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <Card className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <p>{msg.text}</p>
                    </Card>
                </div>
            ))}
        </div>
        <div className="p-4 border-t bg-card">
            <div className="flex items-center gap-2">
                <Input 
                    placeholder="Describe your symptoms..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend} size="icon">
                    <Send className="w-5 h-5" />
                </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
                This is not a substitute for professional medical advice. 
            </p>
        </div>
    </div>
  )
}
