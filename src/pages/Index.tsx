import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';

type TabType = 'home' | 'members' | 'events' | 'rules' | 'chat';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [date, setDate] = useState<Date | undefined>(new Date());

  const members = [
    { name: 'Волк', role: 'Лидер', level: 87, status: 'online', kills: 342 },
    { name: 'Тень', role: 'Заместитель', level: 82, status: 'online', kills: 298 },
    { name: 'Бородач', role: 'Боец', level: 79, status: 'away', kills: 267 },
    { name: 'Призрак', role: 'Снайпер', level: 76, status: 'offline', kills: 312 },
    { name: 'Медведь', role: 'Боец', level: 74, status: 'online', kills: 245 },
    { name: 'Лиса', role: 'Разведчица', level: 71, status: 'online', kills: 189 },
  ];

  const operations = [
    { date: '15 Фев', time: '20:00', title: 'Штурм базы "Волков"', type: 'attack', participants: 12 },
    { date: '18 Фев', time: '19:30', title: 'Защита территории', type: 'defense', participants: 8 },
    { date: '22 Фев', time: '21:00', title: 'Рейд на аномалию', type: 'raid', participants: 15 },
    { date: '25 Фев', time: '20:30', title: 'Война с кланом "Сталкеры"', type: 'war', participants: 20 },
  ];

  const rules = [
    'Уважение к членам клана обязательно',
    'Участие в клановых войнах каждую неделю',
    'Помощь новичкам в освоении зоны',
    'Запрещена торговля с враждебными кланами',
    'Общение в Discord обязательно',
    'Донат артефактов в клановое хранилище',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Roboto']">
      <div className="container mx-auto px-4 py-6">
        <header className="mb-8 border-b border-primary/30 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center border-2 border-primary">
                <Icon name="Radiation" className="text-primary" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary">ЗОНА-13</h1>
                <p className="text-muted-foreground">Клановая система управления</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-primary text-primary">
                <Icon name="Users" size={14} className="mr-1" />
                Членов: {members.length}
              </Badge>
              <Badge variant="outline" className="border-secondary text-secondary">
                <Icon name="Trophy" size={14} className="mr-1" />
                Рейтинг: #7
              </Badge>
            </div>
          </div>
        </header>

        <nav className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'home', icon: 'Home', label: 'Главная' },
            { id: 'members', icon: 'Users', label: 'Члены' },
            { id: 'events', icon: 'Calendar', label: 'События' },
            { id: 'rules', icon: 'ScrollText', label: 'Правила' },
            { id: 'chat', icon: 'MessageSquare', label: 'Чат' },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'hover:bg-muted'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              {tab.label}
            </Button>
          ))}
        </nav>

        <main className="animate-fade-in">
          {activeTab === 'home' && (
            <div className="space-y-6">
              <Card className="p-6 bg-card border-primary/30">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Target" className="text-primary" />
                  Информация о клане
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      ЗОНА-13 - элитный клан сталкеров, контролирующий северные территории. 
                      Мы специализируемся на рейдах в опасные аномалии и защите торговых путей.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Дата основания:</span>
                        <span className="text-primary font-medium">12 Янв 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Побед в войнах:</span>
                        <span className="text-primary font-medium">47</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Территорий под контролем:</span>
                        <span className="text-primary font-medium">8</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg border border-primary/20">
                      <h3 className="font-semibold mb-2 text-primary">Ближайшая операция</h3>
                      <p className="text-sm text-muted-foreground mb-1">15 Февраля в 20:00</p>
                      <p className="font-medium">Штурм базы "Волков"</p>
                      <Button className="mt-3 w-full bg-secondary hover:bg-secondary/90">
                        <Icon name="Swords" size={16} className="mr-2" />
                        Записаться
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 bg-card border-primary/30 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Активных членов</p>
                      <p className="text-2xl font-bold text-primary">{members.filter(m => m.status === 'online').length}/{members.length}</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-card border-primary/30 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <Icon name="Skull" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Всего убийств</p>
                      <p className="text-2xl font-bold text-secondary">{members.reduce((acc, m) => acc + m.kills, 0)}</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-card border-primary/30 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon name="Trophy" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Место в рейтинге</p>
                      <p className="text-2xl font-bold text-primary">#7</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <Card className="p-6 bg-card border-primary/30">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Users" className="text-primary" />
                Состав клана
              </h2>
              <div className="space-y-3">
                {members.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border-2 border-primary">
                        <AvatarFallback className="bg-primary/20 text-primary font-bold">
                          {member.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{member.name}</p>
                          <div className={`w-2 h-2 rounded-full ${
                            member.status === 'online' ? 'bg-primary' : 
                            member.status === 'away' ? 'bg-secondary' : 'bg-muted-foreground'
                          }`} />
                        </div>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Уровень</p>
                        <p className="font-bold text-primary">{member.level}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Убийств</p>
                        <p className="font-bold text-secondary">{member.kills}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'events' && (
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-primary/30">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Calendar" className="text-primary" />
                  Календарь операций
                </h2>
                <div className="flex justify-center mb-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-primary/30"
                  />
                </div>
              </Card>
              
              <Card className="p-6 bg-card border-primary/30">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Swords" className="text-secondary" />
                  Запланированные события
                </h2>
                <div className="space-y-3">
                  {operations.map((op, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border-2 ${
                        op.type === 'war' ? 'bg-secondary/10 border-secondary' :
                        op.type === 'attack' ? 'bg-destructive/10 border-destructive' :
                        'bg-primary/10 border-primary'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold">{op.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {op.date} в {op.time}
                          </p>
                        </div>
                        <Badge variant={op.type === 'war' ? 'destructive' : 'outline'} className={
                          op.type === 'war' ? 'bg-secondary text-secondary-foreground' :
                          op.type === 'attack' ? 'border-destructive text-destructive' :
                          'border-primary text-primary'
                        }>
                          {op.type === 'war' ? 'ВОЙНА' : op.type === 'attack' ? 'АТАКА' : 'РЕЙД'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Users" size={14} />
                          {op.participants} участников
                        </div>
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          Записаться
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'rules' && (
            <Card className="p-6 bg-card border-primary/30">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="ScrollText" className="text-primary" />
                Правила клана
              </h2>
              <div className="space-y-4">
                {rules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-muted rounded-lg border border-primary/20"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border border-primary">
                      <span className="text-primary font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-foreground pt-1">{rule}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-destructive/10 border border-destructive rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" className="text-destructive flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-destructive mb-1">Важно!</p>
                    <p className="text-sm text-muted-foreground">
                      Нарушение правил может привести к исключению из клана. 
                      За серьёзные нарушения возможно добавление в чёрный список зоны.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'chat' && (
            <Card className="p-6 bg-card border-primary/30 h-[600px] flex flex-col">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="MessageSquare" className="text-primary" />
                Клановый чат
              </h2>
              <div className="flex-1 bg-muted rounded-lg p-4 mb-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8 border border-primary">
                      <AvatarFallback className="bg-primary/20 text-primary text-xs">В</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm"><span className="font-semibold text-primary">Волк</span> <span className="text-xs text-muted-foreground">19:34</span></p>
                      <p className="text-sm">Готовимся к штурму, всем быть онлайн в 20:00!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8 border border-primary">
                      <AvatarFallback className="bg-primary/20 text-primary text-xs">Т</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm"><span className="font-semibold text-primary">Тень</span> <span className="text-xs text-muted-foreground">19:36</span></p>
                      <p className="text-sm">Буду, захватил новое оружие</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8 border border-primary">
                      <AvatarFallback className="bg-primary/20 text-primary text-xs">М</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm"><span className="font-semibold text-primary">Медведь</span> <span className="text-xs text-muted-foreground">19:41</span></p>
                      <p className="text-sm">Кто идёт на рейд в выходные?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Написать сообщение..."
                  className="flex-1 bg-muted border border-primary/30 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;