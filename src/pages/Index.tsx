import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type TabType = 'home' | 'members' | 'squads' | 'events' | 'rules';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedSquadIdx, setSelectedSquadIdx] = useState<number | null>(null);
  const [selectedMemberIdx, setSelectedMemberIdx] = useState<number | null>(null);
  const [squadsState, setSquadsState] = useState([
    {
      name: 'Альфа',
      color: 'primary',
      members: [
        { nickname: 'Волк', armor: 'Тяжелая броня', weapon: 'АК-74' },
        { nickname: 'Тень', armor: 'Средняя броня', weapon: 'SCAR-H' },
        { nickname: 'Бородач', armor: 'Легкая броня', weapon: 'М4А1' },
        { nickname: 'Призрак', armor: 'Снайперский костюм', weapon: 'SVD' },
        { nickname: 'Медведь', armor: 'Тяжелая броня', weapon: 'РПК' },
      ],
    },
    {
      name: 'Браво',
      color: 'secondary',
      members: [
        { nickname: 'Лиса', armor: 'Легкая броня', weapon: 'MP5' },
        { nickname: 'Сокол', armor: 'Средняя броня', weapon: 'АК-74М' },
        { nickname: 'Гром', armor: 'Тяжелая броня', weapon: 'ПКМ' },
        { nickname: 'Ветер', armor: 'Легкая броня', weapon: 'УЗИ' },
        { nickname: 'Скала', armor: 'Средняя броня', weapon: 'СВУ' },
      ],
    },
  ]);

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

  const armorTypes = ['Тяжелая броня', 'Средняя броня', 'Легкая броня', 'Снайперский костюм', 'Штурмовой костюм'];
  const weaponTypes = ['АК-74', 'АК-74М', 'SCAR-H', 'М4А1', 'SVD', 'РПК', 'ПКМ', 'MP5', 'УЗИ', 'СВУ', 'AWP', 'M249'];

  const handleEditMember = (squadIdx: number, memberIdx: number) => {
    setSelectedSquadIdx(squadIdx);
    setSelectedMemberIdx(memberIdx);
    setIsEditDialogOpen(true);
  };

  const handleUpdateMember = (field: 'armor' | 'weapon', value: string) => {
    if (selectedSquadIdx !== null && selectedMemberIdx !== null) {
      setSquadsState(prev => {
        const updated = [...prev];
        updated[selectedSquadIdx].members[selectedMemberIdx] = {
          ...updated[selectedSquadIdx].members[selectedMemberIdx],
          [field]: value
        };
        return updated;
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-['Roboto'] flex">
      <aside className="fixed left-0 top-0 h-full w-16 hover:w-64 bg-card border-r border-primary/30 transition-all duration-300 z-50 group overflow-hidden">
        <div className="p-4 border-b border-primary/30">
          <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center border border-primary group-hover:w-full transition-all">
            <Icon name="Radiation" className="text-primary" size={20} />
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-primary font-bold">ЗОНА-13</span>
          </div>
        </div>
        <nav className="p-2 space-y-1 mt-4">
          {[
            { id: 'home', icon: 'Home', label: 'Главная' },
            { id: 'members', icon: 'Users', label: 'Члены' },
            { id: 'squads', icon: 'Shield', label: 'Отряды' },
            { id: 'events', icon: 'Calendar', label: 'События' },
            { id: 'rules', icon: 'ScrollText', label: 'Правила' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <Icon name={tab.icon} size={20} className="flex-shrink-0" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <div className="flex-1 ml-16">
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
              <Badge variant="outline" className="border-primary text-primary">
                <Icon name="Users" size={14} className="mr-1" />
                Игроков: {members.length}
              </Badge>
            </div>
          </header>

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
              </div>
            )}

            {activeTab === 'squads' && (
              <div className="space-y-6">
                {squadsState.map((squad, idx) => (
                  <Card key={idx} className="p-6 bg-card border-primary/30">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Icon name="Shield" className={`text-${squad.color}`} />
                      Отряд "{squad.name}"
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {squad.members.map((member, memberIdx) => (
                        <div
                          key={memberIdx}
                          className="flex flex-col items-center p-4 bg-muted rounded-lg border border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                          onClick={() => handleEditMember(idx, memberIdx)}
                        >
                          <div className="w-24 h-24 bg-primary/10 rounded-lg border-2 border-primary/30 mb-3 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/20" />
                            <Icon name="User" size={40} className="text-primary/60 relative z-10" />
                          </div>
                          <div className="w-full space-y-2 text-center">
                            <p className="font-bold text-primary">{member.nickname}</p>
                            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                              <Icon name="ShieldCheck" size={12} />
                              <span>{member.armor}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                              <Icon name="Crosshair" size={12} />
                              <span>{member.weapon}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
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
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-primary/20"
                  />
                </Card>
                <Card className="p-6 bg-card border-primary/30">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="Swords" className="text-primary" />
                    Предстоящие операции
                  </h2>
                  <div className="space-y-4">
                    {operations.map((op, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-muted rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-foreground">{op.title}</p>
                            <p className="text-sm text-muted-foreground">{op.date} в {op.time}</p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`${
                              op.type === 'attack' ? 'border-destructive text-destructive' :
                              op.type === 'defense' ? 'border-secondary text-secondary' :
                              op.type === 'raid' ? 'border-primary text-primary' :
                              'border-accent text-accent'
                            }`}
                          >
                            {op.type === 'attack' ? 'Атака' :
                             op.type === 'defense' ? 'Защита' :
                             op.type === 'raid' ? 'Рейд' : 'Война'}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Users" size={14} />
                          <span>Участников: {op.participants}</span>
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
                      <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center flex-shrink-0 border border-primary/30">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-foreground flex-1">{rule}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </main>

          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent className="bg-card border-primary/30">
              <DialogHeader>
                <DialogTitle className="text-primary">Редактировать бойца</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedSquadIdx !== null && selectedMemberIdx !== null &&
                    `Изменение экипировки для ${squadsState[selectedSquadIdx].members[selectedMemberIdx].nickname}`
                  }
                </DialogDescription>
              </DialogHeader>
              {selectedSquadIdx !== null && selectedMemberIdx !== null && (
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Броня</label>
                    <Select
                      value={squadsState[selectedSquadIdx].members[selectedMemberIdx].armor}
                      onValueChange={(value) => handleUpdateMember('armor', value)}
                    >
                      <SelectTrigger className="bg-muted border-primary/30">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {armorTypes.map((armor) => (
                          <SelectItem key={armor} value={armor}>
                            {armor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Оружие</label>
                    <Select
                      value={squadsState[selectedSquadIdx].members[selectedMemberIdx].weapon}
                      onValueChange={(value) => handleUpdateMember('weapon', value)}
                    >
                      <SelectTrigger className="bg-muted border-primary/30">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {weaponTypes.map((weapon) => (
                          <SelectItem key={weapon} value={weapon}>
                            {weapon}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90" 
                    onClick={() => setIsEditDialogOpen(false)}
                  >
                    <Icon name="Check" size={16} className="mr-2" />
                    Сохранить
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Index;
